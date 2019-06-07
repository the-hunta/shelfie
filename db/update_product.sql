update products
set product = $2
where product_id = $1;

select *
from products
order by product_is asc;