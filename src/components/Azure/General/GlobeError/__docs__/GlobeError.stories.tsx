import type { Meta, StoryObj } from "@storybook/react";
import GlobeError from "../GlobeError";

const meta: Meta<typeof GlobeError> = { title: "Azure/General/GlobeError", component: GlobeError };

export default meta;
type Story = StoryObj<typeof GlobeError>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
