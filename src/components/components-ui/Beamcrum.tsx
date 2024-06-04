import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"

export function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumb className="">
      <BreadcrumbList>
        <BreadcrumbItem>
            <Link className="text-[#707071] " to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#707071]" />
        <BreadcrumbItem>
            <Link className="text-[#707071] " to="/components">Components</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#707071]" />
        <BreadcrumbItem>
            <Link className="text-[#313131]" to="/components">Components</Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
