import type { Meta, StoryObj } from "@storybook/react";
import Themeisle51 from "../Themeisle51";

const meta: Meta<typeof Themeisle51> = { title: "Themeisle/Themeisle51", component: Themeisle51 };

export default meta;
type Story = StoryObj<typeof Themeisle51>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
