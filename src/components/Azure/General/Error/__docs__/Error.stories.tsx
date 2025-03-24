import type { Meta, StoryObj } from "@storybook/react";
import Error from "../Error";

const meta: Meta<typeof Error> = { title: "Azure/General/Error", component: Error };

export default meta;
type Story = StoryObj<typeof Error>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
