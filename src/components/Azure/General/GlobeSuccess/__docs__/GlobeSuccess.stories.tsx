import type { Meta, StoryObj } from "@storybook/react";
import GlobeSuccess from "../GlobeSuccess";

const meta: Meta<typeof GlobeSuccess> = { title: "Azure/General/GlobeSuccess", component: GlobeSuccess };

export default meta;
type Story = StoryObj<typeof GlobeSuccess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
