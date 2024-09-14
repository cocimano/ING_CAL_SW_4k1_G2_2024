package utn.frc.isi.is.g2.istp6back.FirebaseStorage.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import utn.frc.isi.is.g2.istp6back.FirebaseStorage.Entities.ShippingOrderImage;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;

@Repository
public interface ShippingOrderImageRepository extends JpaRepository<ShippingOrderImage, Long> {



}
