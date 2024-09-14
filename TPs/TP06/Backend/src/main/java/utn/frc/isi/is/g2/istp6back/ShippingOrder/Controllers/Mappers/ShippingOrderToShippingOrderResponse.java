package utn.frc.isi.is.g2.istp6back.ShippingOrder.Controllers.Mappers;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.AddressResponse;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.ProvinceResponse;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.Mappers.AdressToAddressResponse;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Province;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Controllers.DTO.ShippingOrderResponse;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;

import java.util.function.Function;

@Component
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ShippingOrderToShippingOrderResponse implements Function<ShippingOrder, ShippingOrderResponse> {

    AdressToAddressResponse adressToAddressResponse;

    @Override
    public ShippingOrderResponse apply(ShippingOrder shippingOrder) {
        AddressResponse pickUpAddressResponse = adressToAddressResponse.apply(shippingOrder.getPickUpAddress());
        AddressResponse deliveryAddressResponse = adressToAddressResponse.apply(shippingOrder.getDeliveryAddress());

        return ShippingOrderResponse.builder()
                .id(shippingOrder.getId())
                .loadType(shippingOrder.getLoadType())
                .pickUpAddress(pickUpAddressResponse)
                .pickUpDate(shippingOrder.getPickUpDate())
                .deliveryAddress(deliveryAddressResponse)
                .deliveryDate(shippingOrder.getDeliveryDate())
                .build();
    }

}
