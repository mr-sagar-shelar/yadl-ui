import type { Meta, StoryObj } from "@storybook/react";
import StartBuilding from "../StartBuilding";

const meta: Meta<typeof StartBuilding> = { title: "unDraw/StartBuilding", component: StartBuilding };

export default meta;
type Story = StoryObj<typeof StartBuilding>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
