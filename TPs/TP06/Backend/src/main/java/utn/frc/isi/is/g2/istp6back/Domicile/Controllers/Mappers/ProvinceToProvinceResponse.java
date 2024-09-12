package utn.frc.isi.is.g2.istp6back.Domicile.Controllers.Mappers;

import utn.frc.isi.is.g2.istp6back.Domicile.Controllers.DTO.ProvinceResponse;
import utn.frc.isi.is.g2.istp6back.Domicile.Entities.Province;

import java.util.function.Function;

public class ProvinceToProvinceResponse implements Function<Province, ProvinceResponse> {

    @Override
    public ProvinceResponse apply(Province province) {
        return ProvinceResponse.builder()
                .id(province.getId())
                .name(province.getName())
                .build();
    }

}
