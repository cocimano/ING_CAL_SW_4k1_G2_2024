package utn.frc.isi.is.g2.istp6back.Address.Services;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.AddressRequest;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Address;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Location;
import utn.frc.isi.is.g2.istp6back.Address.Repositories.AddressRepository;
import utn.frc.isi.is.g2.istp6back.Address.Repositories.LocationRepository;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Controllers.DTO.ShippingOrderRequest;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AddressService {

    AddressRepository addressRepository;
    LocationRepository locationRepository;

    public List<Address> findAll() {
        return addressRepository.findAll();
    }

    @Transactional
    public Address save(AddressRequest newAddressRequest) {
        Location location = locationRepository.findById(newAddressRequest.getLocationId())
                .orElseThrow(() -> new IllegalArgumentException("Location not found"));

        Address newAddress = Address.builder()
                .street(newAddressRequest.getStreet())
                .number(newAddressRequest.getNumber())
                .reference(newAddressRequest.getReference())
                .location(location)
                .build();

        return addressRepository.save(newAddress);
    }

}
