package utn.frc.isi.is.g2.istp6back.Domicile.Controllers.Mappers;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import utn.frc.isi.is.g2.istp6back.Domicile.Controllers.DTO.LocationResponse;
import utn.frc.isi.is.g2.istp6back.Domicile.Controllers.DTO.ProvinceResponse;
import utn.frc.isi.is.g2.istp6back.Domicile.Entities.Location;

import java.util.function.Function;

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
