package utn.frc.isi.is.g2.istp6back.Address.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Location;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Province;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

    List<Location> findByProvince(Province province);

}
