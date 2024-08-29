from typing import Annotated

import requests

from bs4 import BeautifulSoup


from fastapi import APIRouter, Depends
from repository import ContentRepository
from schemas import SHomeContent, SHomeContentAdd, SElectricityHours

router = APIRouter(
    tags=["mainpage content"]
)

@router.post("/home")
async def add_content(
        content: Annotated[SHomeContentAdd, Depends()]
):
    content_id = await ContentRepository.add_one(content)
    return {"ok": True, "content_id":content_id}


@router.get("/home")
async def get_contents() -> list[SHomeContent]:
    home_content = await ContentRepository.find_all()
    return home_content

@router.get("/electricity")
async def parser ():
    res = requests.get(url="https://lviv.energy-ua.info/grupa/2.2")
    soup = BeautifulSoup(res.text,"lxml")
    texts = soup.find_all("div", class_="grafik_string_list_item")
    strings = []
    for text in texts:
        jj = text.get_text()
        strings.append(jj)
    hours = soup.find_all("div",  class_="scale_el_r")
    items = []
    for hour in hours:
        time = hour.get_text()
        items.append(time)
    print(items, strings)
    return strings, items
