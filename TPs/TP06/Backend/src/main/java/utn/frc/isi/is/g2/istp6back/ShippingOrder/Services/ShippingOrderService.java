package utn.frc.isi.is.g2.istp6back.ShippingOrder.Services;

import jakarta.mail.MessagingException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Address;
import utn.frc.isi.is.g2.istp6back.Address.Services.AddressService;
import utn.frc.isi.is.g2.istp6back.Email.Services.EmailService;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Controllers.DTO.ShippingOrderRequest;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Enums.ShippingOrderStates;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Repositories.ShippingOrderRepository;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ShippingOrderService {

    AddressService addressService;
    EmailService emailService;


    ShippingOrderRepository shippingOrderRepository;

    public List<ShippingOrder> findAll() {
        return shippingOrderRepository.findAll();
    }

    public List<ShippingOrder> findAllPending() {
        return shippingOrderRepository.findShippingOrderByState(ShippingOrderStates.PENDING);
    }

    public List<ShippingOrder> findAllTaken() {
        return shippingOrderRepository.findShippingOrderByState(ShippingOrderStates.TAKEN);
    }

    public List<ShippingOrder> findAllDelivered() {
        return shippingOrderRepository.findShippingOrderByState(ShippingOrderStates.DELIVERED);
    }

    @Transactional
    public ShippingOrder save(ShippingOrderRequest newShippingOrderRequest) throws MessagingException, IOException {
        Address pickUpAddress = addressService.save(newShippingOrderRequest.getPickUpAddress());
        Address deliveryAddres = addressService.save(newShippingOrderRequest.getDeliveryAddress());

        ShippingOrder newShippingOrder = ShippingOrder.builder()
                .loadType(newShippingOrderRequest.getLoadType())
                .pickUpAddress(pickUpAddress)
                .pickUpDate(newShippingOrderRequest.getPickUpDate())
                .deliveryAddress(deliveryAddres)
                .deliveryDate(newShippingOrderRequest.getDeliveryDate())
                .state(ShippingOrderStates.PENDING)
                .build();

        // Send email
        emailService.sendNewShippingOrderEmail(newShippingOrder);

        return shippingOrderRepository.save(newShippingOrder);
    }

}
