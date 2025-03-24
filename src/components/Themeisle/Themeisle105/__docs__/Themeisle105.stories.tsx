import type { Meta, StoryObj } from "@storybook/react";
import Themeisle105 from "../Themeisle105";

const meta: Meta<typeof Themeisle105> = { title: "Themeisle/Themeisle105", component: Themeisle105 };

export default meta;
type Story = StoryObj<typeof Themeisle105>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
