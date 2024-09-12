package utn.frc.isi.is.g2.istp6back.ShippingOrder.Services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Repositories.ShippingOrderRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ShippingOrderService {

    private final ShippingOrderRepository shippingOrderRepository;

    public List<ShippingOrder> findAll() {
        return shippingOrderRepository.findAll();
    }

}
