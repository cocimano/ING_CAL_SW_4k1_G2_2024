package utn.frc.isi.is.g2.istp6back.Domicile.Controllers.Mappers;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import utn.frc.isi.is.g2.istp6back.Domicile.Controllers.DTO.AddressResponse;
import utn.frc.isi.is.g2.istp6back.Domicile.Controllers.DTO.LocationResponse;
import utn.frc.isi.is.g2.istp6back.Domicile.Entities.Address;

import java.util.function.Function;

@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AdressToAddressResponse implements Function<Address, AddressResponse> {

    LocationToLocationResponse locationToLocationResponse;

    @Override
    public AddressResponse apply(Address address) {
        LocationResponse locationResponse = locationToLocationResponse.apply(address.getLocation());

        return AddressResponse.builder()
                .id(address.getId())
                .street(address.getStreet())
                .number(address.getNumber())
                .reference(address.getReference())
                .location(locationResponse)
                .build();
    }

}
