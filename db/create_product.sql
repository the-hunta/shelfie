insert into products
(product)
value ($1)

select *
from product
order by product_id asc;

