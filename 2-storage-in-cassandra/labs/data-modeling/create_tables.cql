
/* 
 * We need to keep track of the count to display in UI. 
 * - We want all hotels in same partition to avoid full scan
**/

CREATE TABLE IF NOT EXISTS locations (
   location_type text,
   country text,
   city text,
   pitch text,
   location_count counter,
   PRIMARY KEY((location_type), country, city, pitch)
);

UPDATE locations SET location_count=location_count+72 
WHERE location_type='hotels' 
AND country='Italy' 
AND city='Milan'
AND pitch='capital of fashion and Opera';

UPDATE locations SET location_count=location_count+132 
WHERE location_type='hotels' 
AND country='Spain' 
AND city='Barcelona'
AND pitch='Architecture, delicious cuisine, and lively atmosphere';

UPDATE locations SET location_count=location_count+81 
WHERE location_type='hotels' 
AND country='Austria' 
AND city='Vienna'
AND pitch='Rich history and cultural heritage';

UPDATE locations SET location_count=location_count+356 
WHERE location_type='hotels' 
AND country='United Kingdom'
AND city='London'
AND pitch='Vibrant with a bustling cosmopolitan atmosphere';

UPDATE locations SET location_count=location_count+263 
WHERE location_type='hotels' 
AND country='France' 
AND city='Paris'
AND pitch='The romantic city';

UPDATE locations SET location_count=location_count+83 
WHERE location_type='hotels' 
AND country='Netherlands' 
AND city='Amsterdam'
AND pitch='Canals, museums, and liberal culture';

UPDATE locations SET location_count=location_count+0
WHERE location_type='hotels' 
AND country='U.S.A (CA)' 
AND city='SanJose'
AND pitch='Get Proficient with Cassandra';

CREATE TABLE IF NOT EXISTS users (
  email            text,
  firstname        text,
  lastname         text,
  hashed_password  text,
  PRIMARY KEY((email))
);


CREATE TABLE IF NOT EXISTS hotels_by_city (
   country text,
   city text,
   rate double,
   hotel_name text,
   hotel_address text,
   hotel_price int,
   hotel_thumbnail text,
   PRIMARY KEY ((country), city, rate, hotel_name)
) WITH CLUSTERING ORDER BY (city ASC, rate DESC, hotel_name ASC);


CREATE TABLE IF NOT EXISTS staging_hotel_reviews (
  uid                                        uuid,
  hotel_address                              text,
  additional_number_of_scoring               int,
  review_date                                date,
  average_score                              double,
  hotel_name                                 text,
  reviewer_nationality                       text,
  negative_review                            text,
  review_total_negative_word_counts          int,
  total_number_of_reviews                    int,
  positive_review                            text,
  review_total_positive_word_counts          int,
  total_number_of_reviews_reviewer_has_given int,
  reviewer_score                             double,
  tags                                       set<text>,
  days_since_review                          text,
  latitude                                   double,
  longitude                                  double,
  PRIMARY KEY(uid)
);
