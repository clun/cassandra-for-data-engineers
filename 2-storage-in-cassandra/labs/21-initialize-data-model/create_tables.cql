
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
   hotel_name text,
   hotel_address text,
   PRIMARY KEY ((country), city, hotel_name)
);

CREATE TABLE IF NOT EXISTS reviews_by_hotel (
   country text,
   city text,
   hotel_name text,
   hotel_address text,
   PRIMARY KEY ((country), city)
);
