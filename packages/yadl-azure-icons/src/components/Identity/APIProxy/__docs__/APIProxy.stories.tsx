import type { Meta, StoryObj } from "@storybook/react";
import APIProxy from "../APIProxy";

const meta: Meta<typeof APIProxy> = { title: "Azure/Identity/APIProxy", component: APIProxy };

export default meta;
type Story = StoryObj<typeof APIProxy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
