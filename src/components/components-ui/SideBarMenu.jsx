import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SidebarWithSearch() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[100vh] w-[16.5rem] p-4 shadow-xl shadow-blue-gray-900/2">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <Link to={'/'}>
          <Typography variant="h5" color="blue-gray">
            SABATA
          </Typography>
        </Link>
      </div>
      <div className="p-2">
        <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="text-[15px] mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="text-[15px]">
                <ListItemPrefix>
                  {/* Añadir contenido vacío para children */}
                  <></>
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem className="text-[15px]">
                <ListItemPrefix>
                  {/* Añadir contenido vacío para children */}
                  <></>
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem className="text-[15px]">
                <ListItemPrefix>
                  {/* Añadir contenido vacío para children */}
                  <></>
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="text-[15px] mr-auto font-normal">
                Products
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to={"/ec/product-manager/tutorial"}>
                <ListItem className="text-[15px]">
                  <ListItemPrefix>
                    {/* Añadir contenido vacío para children */}
                    <></>
                  </ListItemPrefix>
                  Add Products
                </ListItem>
              </Link>
              <ListItem className="text-[15px]">
                <ListItemPrefix>
                  {/* Añadir contenido vacío para children */}
                  <></>
                </ListItemPrefix>
                Manage Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem className="text-[15px]">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="text-[15px]">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem className="text-[15px]">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className="text-[15px]">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      {/* <Alert open={openAlert} className="mt-auto w-[240px] h-[145px] " onClose={() => setOpenAlert(false)}>
        <CubeTransparentIcon className="mb-4 h-8 w-8" />
        <Typography variant="h6" className="mb-1 -mt-3 text-base">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal text-xs opacity-80">
          Actualiza Tu Plan a Modo Premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium -mt-2 opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="-mt-2 font-medium">
            Upgrade Now
          </Typography>
        </div>
      </Alert> */}
    </Card>
  );
}
