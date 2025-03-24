import type { Meta, StoryObj } from "@storybook/react";
import ServerFarm from "../ServerFarm";

const meta: Meta<typeof ServerFarm> = { title: "Azure/General/ServerFarm", component: ServerFarm };

export default meta;
type Story = StoryObj<typeof ServerFarm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
