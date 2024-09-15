-- Remember to also delete firebase images

DELETE FROM addresses;
-- DELETE FROM locations;
-- DELETE FROM provinces;
DELETE FROM shippingorderimages;
DELETE FROM shippingorders;
-- DELETE FROM users;
-- DELETE FROM users_coveragearea;

ALTER SEQUENCE address_seq
    RESTART 1;
-- ALTER SEQUENCE location_seq
--     RESTART 1;
-- ALTER SEQUENCE province_seq
--     RESTART 1;
ALTER SEQUENCE shippingorder_seq
    RESTART 1;
ALTER SEQUENCE shippingorderimage_seq
    RESTART 1;
-- ALTER SEQUENCE users_seq
--     RESTART 1;
