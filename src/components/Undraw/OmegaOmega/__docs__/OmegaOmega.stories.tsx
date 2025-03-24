import type { Meta, StoryObj } from "@storybook/react";
import OmegaOmega from "../OmegaOmega";

const meta: Meta<typeof OmegaOmega> = { title: "unDraw/OmegaOmega", component: OmegaOmega };

export default meta;
type Story = StoryObj<typeof OmegaOmega>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
