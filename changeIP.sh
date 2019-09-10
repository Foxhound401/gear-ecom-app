oldIPAddress=$1
newIPAddress=$2

echo "******************* Loading *******************"
echo ""
echo "Changed old IP Address $oldIPAddress to new IP Address $newIPAddress"
echo ""
echo "******************* Finished *******************"

find ./src/components -type f | xargs sed -i "s/$oldIPAddress/$newIPAddress/g"

find ./src/api -type f | xargs sed -i "s/$oldIPAddress/$newIPAddress/g"
