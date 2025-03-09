CREATE TYPE status_enum AS ENUM ('active', 'inactive', 'delete');


CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  description VARCHAR(255),
  price INT NOT NULL,
  photo VARCHAR(255),
  status status_enum DEFAULT 'active',
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

