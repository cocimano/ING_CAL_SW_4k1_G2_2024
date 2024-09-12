package utn.frc.isi.is.g2.istp6back.Address.Controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.ProvinceResponse;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.Mappers.ProvinceToProvinceResponse;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Province;
import utn.frc.isi.is.g2.istp6back.Address.Services.ProvinceService;

import java.util.List;

@Tag(name = "Address")
@RestController
@RequestMapping("/provinces")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ProvinceController {

    ProvinceService provinceService;

    @GetMapping
    public ResponseEntity<List<ProvinceResponse>> findAll(){
        List<Province> provinces = this.provinceService.findAll();
        List<ProvinceResponse> provincesResponses = provinces.stream().map(new ProvinceToProvinceResponse()).toList();

        return ResponseEntity.ok(provincesResponses);
    }

}
