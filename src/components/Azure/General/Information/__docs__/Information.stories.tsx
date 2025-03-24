import type { Meta, StoryObj } from "@storybook/react";
import Information from "../Information";

const meta: Meta<typeof Information> = { title: "Azure/General/Information", component: Information };

export default meta;
type Story = StoryObj<typeof Information>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
