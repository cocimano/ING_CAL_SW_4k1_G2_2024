package utn.frc.isi.is.g2.istp6back.Domicile.Services;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import utn.frc.isi.is.g2.istp6back.Domicile.Entities.Address;
import utn.frc.isi.is.g2.istp6back.Domicile.Repositories.AddressRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AddressService {

    AddressRepository addressRepository;

    public List<Address> findAll() {
        return addressRepository.findAll();
    }

}
