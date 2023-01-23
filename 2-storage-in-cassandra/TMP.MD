```
select country,city,count(hotel_name)as hotels FROM hotels_by_city GROUP BY country,city
```

```
          Spain | Barcelona |    132
        Austria |    Vienna |     81
 United Kingdom |    London |    356
         France |     Paris |    263
    Netherlands | Amsterdam |     83
          Italy |     Milan |     72


```



```
npm install create-react-app@5.0.1
```

```
npx create-react-app hote-reviews --template typescript
```

- Curl to list hotel by hotels by city
```
curl -X 'GET' \
  'https://f861e773-ab1b-4313-bf3c-8a47412c9ecd-us-east1.apps.astra.datastax.com/api/rest/v2/keyspaces/data_exploration/hotels_by_city/rows?pageSize=20' \
  -H 'accept: application/json' \
  -H 'X-Cassandra-Token: AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b'
```

- Get hotels for ITALY

```
curl -X 'GET' \
  'https://f861e773-ab1b-4313-bf3c-8a47412c9ecd-us-east1.apps.astra.datastax.com/api/rest/v2/keyspaces/data_exploration/hotels_by_city?where=%7B%22country%22%3A%7B%22%24eq%22%3A%22Italy%22%7D%2C%22city%22%3A%7B%22%24eq%22%3A%22Milan%22%7D%7D&fields=hotel_name%2Chotel_address&page-size=20' \
  -H 'accept: application/json' \
  -H 'X-Cassandra-Token: AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b'
```

- Page 2

```
curl -X 'GET' \
  'https://f861e773-ab1b-4313-bf3c-8a47412c9ecd-us-east1.apps.astra.datastax.com/api/rest/v2/keyspaces/data_exploration/hotels_by_city?where=%7B%22country%22%3A%7B%22%24eq%22%3A%22Italy%22%7D%2C%22city%22%3A%7B%22%24eq%22%3A%22Milan%22%7D%7D&page-size=20&fields=hotel_name%2Chotel_address&page-state=ABQABU1pbGFuDEhvdGVsIEF1cmlnYfB____r8H___-s%3D' \
  -H 'accept: application/json' \
  -H 'X-Cassandra-Token: AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b'
  ```


curl -X 'GET' \
  'https://f861e773-ab1b-4313-bf3c-8a47412c9ecd-us-east1.apps.astra.datastax.com/api/rest/v2/keyspaces/data_exploration/hotels_by_city?where=%7B%22country%22%3A%7B%22%24eq%22%3A%22Italy%22%7D%2C%22city%22%3A%7B%22%24eq%22%3A%22Milan%22%7D%7D&fields=hotel_name%2Chotel_address&page-size=20&page-state=ABQABU1pbGFuDEhvdGVsIEF1cmlnYfB____r8H___-s%3D' \
  -H 'accept: application/json' \
  -H 'X-Cassandra-Token: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiJhNGVjNDFjZi1mODFjLTRhZjUtYTY3Zi1lZTcxYWFkOWI1ZTIiLCJleHAiOjE2NzQyNjI5MDgsIm5iZiI6MCwiaWF0IjoxNjc0MjI2OTA4LCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiYjY2NTY1OGEtYWU2YS00ZjMwLWE3NDAtMjM0MmE3ZmI0NjljIiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjc0MjI2OTA4LCJzZXNzaW9uX3N0YXRlIjoiODkxNjU2NWItN2I3Ny00ZjY2LTgzZjUtMGYxMjAwMGQzM2MyIiwiYWNyIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJmOTQ2MGYxNC05ODc5LTRlYmUtODNmMi00OGQzZjNkY2UxM2MvQWRtaW5pc3Rlck9yZ2FuaXphdGlvbiIsInVtYV9hdXRob3JpemF0aW9uIiwiZTE5NWZiZWEtNzliNi00ZDYwLTkyOTEtMDYzZDhjOWU2MzY0L0FkbWluaXN0ZXJPcmdhbml6YXRpb24iXX0sIm5hbWUiOiJDZWRyaWNrIEx1bnZlbiIsInByZWZlcnJlZF91c2VybmFtZSI6ImNlZHJpY2subHVudmVuQGRhdGFzdGF4LmNvbSIsImdpdmVuX25hbWUiOiJDZWRyaWNrIiwiZmFtaWx5X25hbWUiOiJMdW52ZW4iLCJlbWFpbCI6ImNlZHJpY2subHVudmVuQGRhdGFzdGF4LmNvbSJ9.brh91yY8RyFRTw_w4VYtaHkP0k8LrPw4_1YWnM5V7QnpixiIFwBB3z9tIo_gEfDEmwdm_6uH8lwfRGyzl21Xo86IUyiTbliUBh9rCwYTqenUyHHNOgNj9sj0azssLzetFzI8PO2QGP5Yt-9xCBWdpnqWZkh2V_8YvhRs3--pG_yRVGEqedwPKAuR6K4iy2gdUowO2YdMNgIRU2RxaC09LQcGMDlZYgnR5CaY5lCXVYu86dI3HI6ADUw1dVlmkTbm1LRBz5BP2gt4VApmP24iK4CConu1omi3a1Zqc53G6la7AycIAeQUT2JgeY--aCG0KE9RU1SIbFXvGxQobXPE4w'
