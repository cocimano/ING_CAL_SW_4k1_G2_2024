package utn.frc.isi.is.g2.istp6back.ShippingOrder.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Enums.ShippingOrderStates;
import utn.frc.isi.is.g2.istp6back.User.Entities.User;

import java.util.List;

@Repository
public interface ShippingOrderRepository extends JpaRepository<ShippingOrder, Long> {

    List<ShippingOrder> findShippingOrderByState(ShippingOrderStates state);

}
