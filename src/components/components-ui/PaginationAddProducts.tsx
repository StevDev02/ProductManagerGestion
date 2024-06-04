import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  export function PaginationDemoAddProducts() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious className="hover:bg-[#f4f4f5]" href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="border border-[#00000041] " href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="hover:border hover:border-[#00000041]" href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="hover:border hover:border-[#00000041]" href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="hover:border hover:border-[#00000041]" href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className="hover:bg-[#f4f4f5]" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  