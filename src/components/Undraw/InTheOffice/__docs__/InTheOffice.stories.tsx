import type { Meta, StoryObj } from "@storybook/react";
import InTheOffice from "../InTheOffice";

const meta: Meta<typeof InTheOffice> = { title: "unDraw/InTheOffice", component: InTheOffice };

export default meta;
type Story = StoryObj<typeof InTheOffice>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
