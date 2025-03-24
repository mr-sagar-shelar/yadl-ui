import type { Meta, StoryObj } from "@storybook/react";
import AddInformation from "../AddInformation";

const meta: Meta<typeof AddInformation> = { title: "unDraw/AddInformation", component: AddInformation };

export default meta;
type Story = StoryObj<typeof AddInformation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
