package utn.frc.isi.is.g2.istp6back.Address.Controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.DTO.LocationResponse;
import utn.frc.isi.is.g2.istp6back.Address.Controllers.Mappers.LocationToLocationResponse;
import utn.frc.isi.is.g2.istp6back.Address.Entities.Location;
import utn.frc.isi.is.g2.istp6back.Address.Services.LocationService;

import java.util.List;

@Tag(name = "Address")
@RestController
@RequestMapping("/locations")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class LocationController {

    LocationService locationService;
    LocationToLocationResponse locationToLocationResponse;

    @GetMapping()
    public ResponseEntity<List<LocationResponse>> getByProvinceId(
            @RequestParam(required = true) Long provinceId) {
        List<Location> locations = locationService.findByProvinceId(provinceId);
        List<LocationResponse> locationResponses = locations.stream().map(locationToLocationResponse).toList();
        return ResponseEntity.status(HttpStatus.OK).body(locationResponses);
    }

}
