package utn.frc.isi.is.g2.istp6back.ShippingOrder.Controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Controllers.DTO.ShippingOrderRequest;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Controllers.DTO.ShippingOrderResponse;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Controllers.Mappers.ShippingOrderToShippingOrderResponse;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Services.ShippingOrderService;

import java.util.List;

@Tag(name = "Shipping Order")
@RestController
@RequestMapping("/shipping-order")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ShippingOrderController {

    ShippingOrderService shippingOrderService;

    ShippingOrderToShippingOrderResponse shippingOrderToShippingOrderResponse;

    @GetMapping
    public ResponseEntity<List<ShippingOrderResponse>> findAll() {
        List<ShippingOrder> shippingOrders = this.shippingOrderService.findAll();
        List<ShippingOrderResponse> shippingOrderResponses =
                shippingOrders.stream().map(shippingOrderToShippingOrderResponse).toList();

        return ResponseEntity.ok(shippingOrderResponses);
    }

    @PostMapping
    public ResponseEntity<ShippingOrderResponse> save(@RequestBody ShippingOrderRequest newShippingOrderRequest) {
        ShippingOrder newShippingOrder = shippingOrderService.save(newShippingOrderRequest);
        ShippingOrderResponse shippingOrderResponse = shippingOrderToShippingOrderResponse.apply(newShippingOrder);

        return ResponseEntity.status(HttpStatus.CREATED).body(shippingOrderResponse);
    }

}
