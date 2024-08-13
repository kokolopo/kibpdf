import React from "react";
import axios from "axios";

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch(
        "https://simasda.kotabogor.go.id/devel/aset/inventaris/kiba/lki/rpt?id=6378906",
        {
          method: "GET",
          headers: {
            Accept: "application/octet-stream",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
            Connection: "keep-alive",
            Cookie:
              "WhatEver=10926fc817e6d31b74b8a2d3c0d09ab711ad810bc7bce9ac31d64030a328594576009656; auth_tkt=8dde60729f8adb12881f9de0675d5325628b6762d25a967416f2fa7b980368f499a47eda6897fe205ae7bf41e07f889038a3af622de83cd1259da0f7b0b08b9f66bbae76197!userid_type:int; auth_tkt=8dde60729f8adb12881f9de0675d5325628b6762d25a967416f2fa7b980368f499a47eda6897fe205ae7bf41e07f889038a3af622de83cd1259da0f7b0b08b9f66bbae76197!userid_type:int",
            Host: "simasda.kotabogor.go.id",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "sec-ch-ua":
              '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
          },
        }
      );

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file"); // Nama file yang diunduh
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      link.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return <button onClick={handleDownload}>Download File</button>;
};

export default DownloadButton;
