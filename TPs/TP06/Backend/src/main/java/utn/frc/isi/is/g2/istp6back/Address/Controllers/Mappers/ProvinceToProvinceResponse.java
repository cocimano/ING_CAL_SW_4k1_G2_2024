package utn.frc.isi.is.g2.istp6back.Address.Controllers.Mappers;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.ProvinceResponse;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Province;

import java.util.function.Function;

@Component
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ProvinceToProvinceResponse implements Function<Province, ProvinceResponse> {

    @Override
    public ProvinceResponse apply(Province province) {
        return ProvinceResponse.builder()
                .id(province.getId())
                .name(province.getName())
                .build();
    }

}
