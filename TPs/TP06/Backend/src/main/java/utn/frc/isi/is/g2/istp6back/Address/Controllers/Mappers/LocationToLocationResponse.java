package utn.frc.isi.is.g2.istp6back.Address.Controllers.Mappers;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.LocationResponse;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.ProvinceResponse;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Location;

import java.util.function.Function;

@Component
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class LocationToLocationResponse implements Function<Location, LocationResponse> {

    ProvinceToProvinceResponse provinceToProvinceResponse;

    @Override
    public LocationResponse apply(Location location) {
        ProvinceResponse provinceResponse = provinceToProvinceResponse.apply(location.getProvince());

        return LocationResponse.builder()
                .id(location.getId())
                .name(location.getName())
                .province(provinceResponse)
                .build();
    }

}
