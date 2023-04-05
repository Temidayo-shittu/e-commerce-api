[
    {
      $match:
        /**
         * query: The query in MQL.
         */
        {
          product: ObjectId(
            "642adc3cc40f6fe351747fa6"
          ),
        },
    },
    {
      $group:
        /**
         * _id: The id of the group.
         * fieldN: The first field name.
         */
        {
          _id: null,
          averageRating: {
            $avg: "$rating",
          },
          numberOfReviews: {
            $sum: 1,
          },
        },
    },
  ]