package utn.frc.isi.is.g2.istp6back.Address.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {



}
