package utn.frc.isi.is.g2.istp6back.Address.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Province;

@Repository
public interface ProvinceRepository extends JpaRepository<Province, Long> {



}
