import type { Meta, StoryObj } from "@storybook/react";
import Themeisle450 from "../Themeisle450";

const meta: Meta<typeof Themeisle450> = { title: "Themeisle/Themeisle450", component: Themeisle450 };

export default meta;
type Story = StoryObj<typeof Themeisle450>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
