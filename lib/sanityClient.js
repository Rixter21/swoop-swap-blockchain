import  sanityClient  from "@sanity/client";

export const client = sanityClient({
  projectId: 'hb5mporm',
  dataset: 'production',
  apiVersion: 'v1',
  token: 'skw1mEbmV2GsHIwbK4xkW3kKIvMU0Fr7Q3RVphcWij5PoazKgIoWFQJm6s4jc4CGJ3aNliEOPeHmaArrOQAJqhw41lxsXZLoNG1WwEJ8Dtg8EPdKZEeS89uVSxl32uNlUxmqJnQ9GJQTPseof3fFWOjYyFcG9Zo2O0uopaJX0YleKsDh8BPb',
  useCdn: false,
});