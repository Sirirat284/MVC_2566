update users 
set status = 'close'
where timestamp  < date_sub(now(), interval 1 week);