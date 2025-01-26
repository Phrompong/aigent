/*
  Warnings:

  - You are about to drop the `Hotel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review_Hotel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review_Hotel" DROP CONSTRAINT "Review_Hotel_hid_fkey";

-- DropTable
DROP TABLE "Hotel";

-- DropTable
DROP TABLE "Review_Hotel";

-- CreateTable
CREATE TABLE "hotel" (
    "hid" INTEGER NOT NULL,
    "id" TEXT NOT NULL,
    "address" TEXT,
    "name" TEXT,
    "amenity_groups" JSONB,
    "check_in_time" TEXT,
    "check_out_time" TEXT,
    "description_struct" JSONB,
    "images" JSONB,
    "images_ext" JSONB,
    "kind" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "phone" TEXT,
    "policy_struct" JSONB,
    "postal_code" TEXT,
    "room_groups" JSONB,
    "region" JSONB,
    "star_rating" INTEGER,
    "email" TEXT,
    "serp_filters" JSONB,
    "deleted" BOOLEAN DEFAULT false,
    "is_closed" BOOLEAN DEFAULT false,
    "is_gender_specification_required" BOOLEAN DEFAULT false,
    "metapolicy_struct" JSONB,
    "metapolicy_extra_info" TEXT,
    "star_certificate" JSONB,
    "facts" JSONB,
    "payment_methods" JSONB,
    "hotel_chain" TEXT,
    "front_desk_time_start" TEXT,
    "front_desk_time_end" TEXT,
    "keys_pickup" JSONB,

    CONSTRAINT "hotel_pkey" PRIMARY KEY ("hid")
);

-- CreateTable
CREATE TABLE "review_hotel" (
    "hid" INTEGER NOT NULL,
    "rating" INTEGER,
    "detailed_ratings" JSONB,
    "reviews" JSONB,

    CONSTRAINT "review_hotel_pkey" PRIMARY KEY ("hid")
);

-- AddForeignKey
ALTER TABLE "review_hotel" ADD CONSTRAINT "review_hotel_hid_fkey" FOREIGN KEY ("hid") REFERENCES "hotel"("hid") ON DELETE RESTRICT ON UPDATE CASCADE;
