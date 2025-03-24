import type { Meta, StoryObj } from "@storybook/react";
import Wavelength from "../Wavelength";

const meta: Meta<typeof Wavelength> = { title: "AWS/Compute/Wavelength", component: Wavelength };

export default meta;
type Story = StoryObj<typeof Wavelength>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
