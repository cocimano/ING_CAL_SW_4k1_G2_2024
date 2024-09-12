-- Restart a sequence. The previous rows must be deleted first
-- The value must be >= 1
ALTER SEQUENCE location_seq
    RESTART 1;
