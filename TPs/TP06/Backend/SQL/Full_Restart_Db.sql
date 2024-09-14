DELETE FROM addresses;
-- DELETE FROM locations;
-- DELETE FROM provinces;
DELETE FROM shippingorders;

ALTER SEQUENCE address_seq
    RESTART 1;
-- ALTER SEQUENCE location_seq
--     RESTART 1;
-- ALTER SEQUENCE province_seq
--     RESTART 1;
ALTER SEQUENCE shippingorder_seq
    RESTART 1;

