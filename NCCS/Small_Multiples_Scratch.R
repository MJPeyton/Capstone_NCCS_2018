library(readxl)
financebytype <- read_excel("financebytype.xlsx")


x <- financebytype %>%
  pivot_wider()