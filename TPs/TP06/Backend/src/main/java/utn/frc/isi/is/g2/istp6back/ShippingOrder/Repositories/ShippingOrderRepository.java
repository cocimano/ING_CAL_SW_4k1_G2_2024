package utn.frc.isi.is.g2.istp6back.ShippingOrder.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;

@Repository
public interface ShippingOrderRepository extends JpaRepository<ShippingOrder, Long> {



}
