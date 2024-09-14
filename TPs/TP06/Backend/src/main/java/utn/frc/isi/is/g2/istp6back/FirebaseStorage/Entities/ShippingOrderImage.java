package utn.frc.isi.is.g2.istp6back.FirebaseStorage.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import utn.frc.isi.is.g2.istp6back.ShippingOrder.Entities.ShippingOrder;

@Entity
@Table(name = "ShippingOrderImages")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShippingOrderImage {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ShippingOrderImage_generator")
    @SequenceGenerator(name = "ShippingOrderImage_generator",
            sequenceName = "ShippingOrderImage_seq", allocationSize = 1)
    long id;

    @Column(nullable = false, unique = true)
    String name;

    @Column(nullable = false, unique = true)
    String url;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    ShippingOrder shippingOrder;

}
