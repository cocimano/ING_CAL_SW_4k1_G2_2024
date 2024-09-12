package utn.frc.isi.is.g2.istp6back.Domicile.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "Addresses")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "domicile_generator")
    @SequenceGenerator(name = "domicile_generator", sequenceName = "domicile_seq", allocationSize = 1)
    long id;

    @Column(nullable = false)
    String street;

    int number;

    String reference;

    @Column(nullable = false)
    @ManyToOne
    @OnDelete(action = OnDeleteAction.SET_NULL)
    Location location;

}
